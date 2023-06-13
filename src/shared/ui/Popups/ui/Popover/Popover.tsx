import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import popupsCls from '../../styles/Popups.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const {
    className, trigger, direction = 'bottom-right', children,
  } = props;

  const optionsClasses = [popupsCls[direction]];

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupsCls.Popups])}
    >
      <HPopover.Button as="div" className={popupsCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, optionsClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
