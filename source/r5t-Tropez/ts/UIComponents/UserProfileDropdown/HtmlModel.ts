import { QuerySelectorHelper } from "r5t-Avignon";


export class HtmlModel
{
    public static FromElementIDs(
        panelDivElementID: string,
        buttonElementID: string,
    ): HtmlModel
    {
        let htmlModel = new HtmlModel(
            document.querySelector(QuerySelectorHelper.GetIDSelector(panelDivElementID)),
            document.querySelector(QuerySelectorHelper.GetIDSelector(buttonElementID)),
        );
        return htmlModel;
    }


    constructor(
        public readonly PanelDiv: HTMLDivElement,
        public readonly Button: HTMLButtonElement)
    {
    }
}