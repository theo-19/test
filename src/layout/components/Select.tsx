import { Button, Menu, MenuItem } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";

interface Props {
  items: any[];
  selectedValue: string | undefined;
  onItemClick: (value: string) => void;
  placeholder: string;
}

export default React.memo(Select);
function Select(props: Props) {
  const { items, onItemClick, selectedValue, placeholder } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClose = useCallback(() => setOpen(false), []);
  const onMenuClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setOpen(true);
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const onMenuItemClick = useCallback(
    (value: string) => {
      onItemClick(value);
      setAnchorEl(null);
      setOpen(false);
    },
    [onItemClick]
  );

  const title = useMemo(
    () => items.find((x) => x.id === selectedValue)?.title,
    [items, selectedValue]
  );

  return (
    <div className="menu-container">
      <Button disabled={!items.length} onClick={onMenuClick} className="button">
        {title || placeholder}
      </Button>
      <Menu
        id="lock-menu"
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {items.map((option) => (
          <MenuItem
            key={option.id}
            selected={option.id === selectedValue}
            onClick={() => onMenuItemClick(option.id)}
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
