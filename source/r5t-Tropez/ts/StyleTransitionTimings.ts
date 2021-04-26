export class StyleTransitionTimings
{
    /**
     * For things that are leaving.
     * The speed of the transition increases, as if an object is at rest, and due to momentum needs time to get up to speed.
     */
    public static readonly EaseIn = "cubic-bezier(0.4, 0, 1, 1)";
    /**
     * For things that are arriving.
     * The speed of the transition descreases, as if an object is flying in, and due to momentum needs time to slow down.
     */
    public static readonly EaseOut = "cubic-bezier(0, 0, 0.2, 1)";
}