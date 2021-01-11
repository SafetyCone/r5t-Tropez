import { QuerySelectorHelper } from "r5t-Avignon/Helpers/QuerySelectorHelper";


export class HtmlModel
{
    public static FromElementIDs(
        menuDivElementID: string,
        buttonElementID: string,
        openedSvgElementID: string,
        closedSvgElementID: string,
    ): HtmlModel
    {
        let htmlModel = new HtmlModel(
            document.querySelector(QuerySelectorHelper.GetIDSelector(menuDivElementID)),
            document.querySelector(QuerySelectorHelper.GetIDSelector(buttonElementID)),
            document.querySelector(QuerySelectorHelper.GetIDSelector(openedSvgElementID)),
            document.querySelector(QuerySelectorHelper.GetIDSelector(closedSvgElementID)),
        );
        return htmlModel;
    }


    constructor(
        public readonly MenuDiv: HTMLDivElement,
        public readonly MenuButton: HTMLButtonElement,
        public readonly OpenedSvg: SVGElement,
        public readonly ClosedSvg: SVGElement)
        {
        }
}