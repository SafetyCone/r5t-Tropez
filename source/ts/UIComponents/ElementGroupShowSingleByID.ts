import { Utilities } from "../Utilities";

export class ElementGroupShowSingleByID
{
    constructor(public readonly Elements: Array<Element>,
        private readonly ShowFunction: (element: Element) => void = Utilities.ShowRemoveHidden,
        private readonly HideFunction: (element: Element) => void = Utilities.HideAddHidden)
    {
    }

    /**
     * Shows a single element out of a list of elements.
     */
    public Show(elementID: string)
    {
        Utilities.ShowElementOfGroupByID(elementID,
            this.Elements,
            this.ShowFunction,
            this.HideFunction);
    }

    /**
     * Hides all element.s
     */
    public HideAll()
    {
        for (const element of this.Elements) {
            this.HideFunction(element);
        }
    }
}