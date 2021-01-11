import { MobileMenu } from "../MobileMenu/MobileMenu";
import { UserProfileDropdown } from "../UserProfileDropdown/UserProfileDropdown";

export class Navbar
{
    public static Using(
        menuDivElementID: string,
        mobileMenuButtonElementID: string,
        openedSvgElementID: string,
        closedSvgElementID: string,
        panelDivElementID: string,
        userProfileButtonElementID: string,
    ): Navbar
    {
        let mobileMenu = MobileMenu.Using(
            menuDivElementID,
            mobileMenuButtonElementID,
            openedSvgElementID,
            closedSvgElementID,
        );
        
        let userProfileDropdown = UserProfileDropdown.Using(
            panelDivElementID,
            userProfileButtonElementID,
        );

        let navbar = new Navbar(mobileMenu, userProfileDropdown);
        return navbar;
    }


    constructor(public readonly MobileMenu: MobileMenu, public readonly UserProfilDropdown: UserProfileDropdown)
    {
    }
}