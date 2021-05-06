import React, { Fragment } from "react";
import { Box } from "theme-ui";
import RcDrawer from "rc-drawer";

/* Drawer is used */
export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      {/* RcDrawer is multiple times accross the application with mutliple props  */}
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${
          className || ""
        }`.trim()} /*trim is used to avoid error because it often appends  */
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={"0.4s"}
        {...props}>
        {closeButton && (
          <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>{children}</Box>
      </RcDrawer>
      <Box
        className="drawer__handler"
        styel={{ display: "inline-block" }}
        onClick={toggleHandler}>
           
        </Box>
    </Fragment>
  );
}

Drawer.defaultProps = {
  width: "320px",
  placement: "left",
};
