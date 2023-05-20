import {
  Fragment, memo, ReactNode, useState,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';
import CheckIcon from '../../assets/icons/check-24-24.svg';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

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
    direction = 'bottom',
    label,
  } = props;

  const optionsClasses = [cls[direction]];

  return (
    <HStack gap="4">
      {label && (
        <span
          className={classNames('', { [cls.disabled]: readonly })}
        >
          {`${label}>`}
        </span>
      )}
      <HListBox
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={cls.trigger}>
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
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
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
