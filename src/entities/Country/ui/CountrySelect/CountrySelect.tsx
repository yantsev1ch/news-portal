import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  {
    value: Country.Belarus,
    content: Country.Belarus,
  },
  {
    value: Country.Russia,
    content: Country.Russia,
  },
  {
    value: Country.Ukraine,
    content: Country.Ukraine,
  },
];

export const CountrySelect = memo(
  ({
    className, value, onChange, readonly,
  }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <ListBox
        value={value}
        defaultValue={t('Укажите страну')}
        label={t('Укажите страну')}
        items={options}
        onChange={onChangeHandler}
        className={className}
        readonly={readonly}
        direction="top-right"
      />
    );

    // return (
    //   <Select
    //     className={classNames('', {}, [className])}
    //     label={t('Укажите страну')}
    //     options={options}
    //     value={value}
    //     onChange={onChangeHandler}
    //     readonly={readonly}
    //   />
    // );
  },
);
