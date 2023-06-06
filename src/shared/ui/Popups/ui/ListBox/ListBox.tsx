import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import cls from './ListBox.module.scss';
import popupsCls from '../../styles/Popups.module.scss';
import CheckIcon from '../../../../assets/icons/check-24-24.svg';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className,
    onChange,
    value,
    items,
    defaultValue,
    readonly,
    direction = 'bottom-right',
    label,
  } = props;

  const optionsClasses = [popupsCls[direction]];

  return (
    <HStack gap="4">
      {label && (
        <span className={classNames('', { [popupsCls.disabled]: readonly })}>
          {`${label}>`}
        </span>
      )}
      <HListBox
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupsCls.Popups])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={popupsCls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupsCls.active]: active,
                    [popupsCls.disabled]: item.disabled,
                  })}
                >
                  <HStack gap="4">
                    {selected && <CheckIcon />}
                    {item.content}
                  </HStack>
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
});
