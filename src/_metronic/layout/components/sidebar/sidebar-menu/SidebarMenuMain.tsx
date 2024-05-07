import { useIntl } from "react-intl";
import { KTIcon } from "../../../../helpers";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to="/dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
        fontIcon="bi-app-indicator"
      />

      <SidebarMenuItemWithSub
        to="/error"
        title="Lịch sử"
        fontIcon="bi-sticky"
        icon="element-11"
      >
        <SidebarMenuItem to="/error/404" title="Chuyên Mục" hasBullet={true} />
        <SidebarMenuItem to="/error/500" title="Đơn Hàng" hasBullet={true} />
        <SidebarMenuItem
          to="/error/500"
          title="Tài khoản đã bán"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/error/500"
          title="Tài khoản tồn kho"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Dịch vụ
          </span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to="/error"
        title="Sản phẩm"
        fontIcon="bi-sticky"
        icon="element-11"
      >
        <SidebarMenuItem to="/error/404" title="Chuyên Mục" hasBullet={true} />
        <SidebarMenuItem to="/error/500" title="Đơn Hàng" hasBullet={true} />
        <SidebarMenuItem
          to="/error/500"
          title="Tài khoản đã bán"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/error/500"
          title="Tài khoản tồn kho"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Quản lý
          </span>
        </div>
      </div>
      <SidebarMenuItem
        to="/apps/user-management/users"
        icon="abstract-28"
        title="Khách Hàng"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/apps/user-management/xusers"
        icon="abstract-28"
        title="Admin Role"
        fontIcon="bi-layers"
      />

      <SidebarMenuItemWithSub
        to="/error"
        title="Nạp tiền"
        fontIcon="bi-sticky"
        icon="element-11"
      >
        <SidebarMenuItem
          to="/apps/user-management/xxusers"
          title="Ngân Hàng"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/apps/user-management/xzxusers"
          title="Ví Momo"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/apps/user-management/xussers"
          title="Nạp thẻ cào"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/apps/user-management/xucxsers"
          title="Crypto"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Apps
          </span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to="/apps/chat"
        title="Chat"
        fontIcon="bi-chat-left"
        icon="message-text-2"
      >
        <SidebarMenuItem
          to="/apps/chat/private-chat"
          title="Private Chat"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/apps/chat/group-chat"
          title="Group Chart"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/apps/chat/drawer-chat"
          title="Drawer Chart"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <div className="menu-item">
        <a
          target="_blank"
          className="menu-link"
          href={import.meta.env.VITE_APP_PREVIEW_DOCS_URL + "/changelog"}
        >
          <span className="menu-icon">
            <KTIcon iconName="code" className="fs-2" />
          </span>
          <span className="menu-title">Cài Đặt</span>
        </a>
      </div>
    </>
  );
};

export { SidebarMenuMain };
