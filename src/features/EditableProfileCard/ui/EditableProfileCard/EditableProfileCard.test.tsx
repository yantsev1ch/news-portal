import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'Andrey',
  lastname: 'Y',
  age: 30,
  currency: Currency.RUB,
  country: Country.Belarus,
  city: 'Minsk',
  username: 'admin',
  avatar:
    'https://www.shutterstock.com/image-vector/programmer-computer-expert-black-linear-260nw-2033137370.jpg',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  test('readonly must be changed', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditBtn'),
    );
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelBtn'),
    ).toBeInTheDocument();
  });

  test('state must be cleared by click to cancel btn', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditBtn'),
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
    await userEvent.type(
      screen.getByTestId('ProfileCard.Firstname'),
      'Firstname',
    );
    await userEvent.type(
      screen.getByTestId('ProfileCard.Lastname'),
      'Lastname',
    );
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
      'Firstname',
    );
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelBtn'),
    );
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
      profile.first,
    );
  });

  test('Show error', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditBtn'),
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('');
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveBtn'),
    );
    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph'),
    ).toBeInTheDocument();
  });

  test('If the form is valid, send a put request to the server', async () => {
    const mockPutRequest = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditBtn'),
    );
    await userEvent.type(
      screen.getByTestId('ProfileCard.Firstname'),
      'Firstname',
    );
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveBtn'),
    );
    expect(mockPutRequest).toHaveBeenCalled();
  });
});
