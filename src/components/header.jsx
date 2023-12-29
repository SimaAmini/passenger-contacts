import { Navbar, Button, Indicator, Badge } from "react-daisyui";

export const Header = () => {
  return (
    <Navbar>
      <Navbar.Start>
        <Button tag="a" color="ghost" className="normal-case text-xl">
          Snapp Contacts
        </Button>
      </Navbar.Start>

      <Navbar.End className="navbar-end">
        <Button color="ghost" shape="circle">
          <Indicator>
            <Badge
              size="xs"
              color="primary"
              className={Indicator.Item.className()}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </Indicator>
        </Button>
        <Button
          tag="label"
          tabIndex={0}
          color="ghost"
          className="avatar"
          shape="circle"
        >
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </Button>
      </Navbar.End>
    </Navbar>
  );
};