import { Utilities } from "../Utilities";

export class HideableElement
{
    constructor(private Element: Element)
    {
    }

    public Show()
    {
        Utilities.ShowRemoveHidden(this.Element);
    }

    public Hide()
    {
        Utilities.HideAddHidden(this.Element);
    }
}