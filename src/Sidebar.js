import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOpion from "./SidebarOption";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Twitter icon*/}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/*Sidebar Option */}
      <SidebarOpion Icon={HomeIcon} text="Home" />
      <SidebarOpion Icon={SearchIcon} text="Explore" />
      <SidebarOpion Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOpion Icon={MailOutlineIcon} text="Messages" />
      <SidebarOpion Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOpion Icon={ListAltIcon} text="Lists" />
      <SidebarOpion Icon={PermIdentityIcon} text="Profile" />
      <SidebarOpion Icon={MoreHorizIcon} text="More" />

      {/*Button => Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
