import { Utilities } from "../../Utilities";
import { HtmlModel } from "./HtmlModel";

export class MobileMenu
{
    public static Using(
        menuDivElementID: string,
        buttonElementID: string,
        openedSvgElementID: string,
        closedSvgElementID: string,
    ): MobileMenu
    {
        let htmlModel = HtmlModel.FromElementIDs(
            menuDivElementID,
            buttonElementID,
            openedSvgElementID,
            closedSvgElementID,
        );

        let mobileMenu = new MobileMenu(htmlModel);
        return mobileMenu;
    }

    
    private _Open : boolean;
    public get Open() : boolean {
        return this._Open;
    }
    public set Open(v : boolean) {
        this._Open = v;

        this.SetMobileMenu();
    }


    constructor(public readonly HtmlModel: HtmlModel, open: boolean = false)
    {
        this.Open = open;
        
        this.Bind();
    }

    private Bind()
    {
        this.HtmlModel.MenuButton.addEventListener("click", () => this.ToggleMobileMenu());
    }

    private SetMobileMenu()
    {
        let htmlModel = this.HtmlModel;
        if(this.Open)
        {
            Utilities.ShowAndHide(htmlModel.OpenedSvg, htmlModel.ClosedSvg);

            Utilities.Show(htmlModel.MenuDiv);
        }
        else
        {
            Utilities.HideAndShow(htmlModel.OpenedSvg, htmlModel.ClosedSvg);

            Utilities.Hide(htmlModel.MenuDiv);
        }
    }

    private ToggleMobileMenu()
    {
        this.Open = !this.Open;
    }
}