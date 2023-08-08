term <- function(ua, en) {
    htmltools::span(
        class = "highlight-container",
        htmltools::span(
            class = "highlight",
            htmltools::HTML(ua),
            htmltools::span(class = "tooltiptext", paste("🇬🇧", htmltools::HTML(en)))
        )
    )
}
