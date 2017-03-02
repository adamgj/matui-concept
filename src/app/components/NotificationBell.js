import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const style = {
    badge: {top: 6, right: 6},
    div: {padding: '8px 8px 10px 0px'}
}

const NotificationBell = () => (

        <Badge
        badgeContent={6}
        secondary={true}
        badgeStyle={style.badge}
        style={style.div}
        >
        <IconButton style={style.button} tooltip="Notifications">
            <NotificationsIcon />
        </IconButton>
        </Badge>

);

export default NotificationBell;