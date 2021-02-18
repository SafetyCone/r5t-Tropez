import { HtmlModel } from "./HtmlModel";

export class UserProfileDropdown
{
    public static Using(
        panelDivElementID: string,
        buttonElementID: string,
    ): UserProfileDropdown
    {
        let htmlModel = HtmlModel.FromElementIDs(
            panelDivElementID,
            buttonElementID,
        );

        let mobileMenu = new UserProfileDropdown(htmlModel);
        return mobileMenu;
    }


    private _Open : boolean;
    public get Open() : boolean {
        return this._Open;
    }
    public set Open(v : boolean) {
        this._Open = v;

        this.SetPanelState();
    }


    constructor(public readonly HtmlModel: HtmlModel, open: boolean = false)
    {
        this.Open = open;

        this.Bind();
    }

    private Bind()
    {
        this.HtmlModel.Button.addEventListener("click", () => this.ToggleUserProfileDropdown());
    }

    private SetPanelState()
    {
        let panelDiv = this.HtmlModel.PanelDiv;
        if(this.Open)
        {
            panelDiv.classList.remove("transition", "ease-in", "duration-75");
            panelDiv.classList.add("transition", "ease-out", "duration-100");
            panelDiv.classList.add("opacity-100", "scale-100");
            panelDiv.classList.remove("opacity-0", "scale-95");
        }
        else
        {
            panelDiv.classList.remove("transition", "ease-out", "duration-100");
            panelDiv.classList.add("transition", "ease-in", "duration-75");
            panelDiv.classList.remove("opacity-100", "scale-100");
            panelDiv.classList.add("opacity-0", "scale-95");
        }
    }

    private ToggleUserProfileDropdown()
    {
        this.Open = !this.Open;

        this.SetPanelState();
    }
}