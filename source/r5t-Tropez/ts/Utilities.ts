import { HtmlAttributeHelper } from "r5t-Avignon";
import { StyleAttributeNames } from "./StyleAttributeNames";

import { StyleClassNames } from "./StyleClassNames";

export class Utilities
{
    public static AddHiddenAttribute(element: Element)
    {
        HtmlAttributeHelper.SetValuelessAttribute(element, StyleAttributeNames.hidden);
    }

    public static RemoveHiddenAttribute(element: Element)
    {
        HtmlAttributeHelper.RemoveAttribute(element, StyleAttributeNames.hidden);
    }

    /**
     * Shows an element by removing the hidden class.
     */
    public static ShowRemoveHidden(element: Element)
    {
        element.classList.remove(StyleClassNames.hidden);
    }

    /**
     * Shows an element by removing the hidden CSS class and adding the block CSS class.
     */
    public static ShowRemoveHiddenAddBlock(element: Element)
    {
        element.classList.remove(StyleClassNames.hidden);
        element.classList.add(StyleClassNames.block);
    }

    /**
     * The default show method, using the remove-hidden-add-block method.
     */
    public static Show(element: Element)
    {
        Utilities.ShowRemoveHiddenAddBlock(element);
    }

    /**
     * Hides an element by adding the hidden class.
     */
    public static HideAddHidden(element: Element)
    {
        element.classList.add(StyleClassNames.hidden);
    }

    /**
     * Hides an element by removing the block class and adding the hidden class.
     */
    public static HideRemoveBlockAddHidden(element: Element)
    {
        element.classList.remove(StyleClassNames.block);
        element.classList.add(StyleClassNames.hidden);
    }

    /**
     * The default hide method, using the remove-block-add-hidden method.
     */
    public static Hide(element: Element)
    {
        Utilities.HideRemoveBlockAddHidden(element);
    }

    /**
     * Shows and hides two different elements as a pair.
     */
    public static ShowAndHide(elementToShow: Element, elementToHide: Element)
    {
        Utilities.Show(elementToShow);
        Utilities.Hide(elementToHide);
    }

    public static HideAndShow(elementToHide: Element, elementToShow: Element)
    {
        Utilities.Hide(elementToHide);
        Utilities.Show(elementToShow);
    }

    public static ShowElementOfGroupByID(id: string, elements: Array<Element>,
        showFunction: (element: Element) => void = Utilities.ShowRemoveHidden,
        hideFunction: (element: Element) => void = Utilities.HideAddHidden)
    {
        for (const element of elements) {
            if(element.id == id)
            {
                showFunction(element);
            }
            else
            {
                hideFunction(element);
            }
        }
    }
}