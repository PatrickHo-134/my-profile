# Common questions when working with Bootstrap (and CSS)
[#Bootstrap]() [#CSS]() [#WebDevelopment]()

As a web developer, I had to google these questions over and over again when working with Bootstrap. Thus, I collect all of the useful resources and put them into this note. Hopefully, you may find them useful :)

## 1. What are the rules of Grid Layout?
The Grid Layout has 3 fundamental rules:
1. Columns must be the immediate child of a Row.
2. Rows are only used to contain Columns, nothing else.
3. Rows should be placed inside a Container.

Click [here](http://bootstrap.themes.guide/how-to-use-bootstrap-grid.html#gridrules:~:text=undesirable%20horizontal%20scroll.-,Rows%20%26%20Columns,-Notice%20that%20I%27ve) for more explanation on Row & Columns.

## 2. What are Containers?
[Containers](https://getbootstrap.com/docs/5.1/layout/containers/) are a fundamental building block when using grid system in Bootstrap. They contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container. Bootstrap comes with three different containers:
- `.container`, which sets a max-width at each responsive breakpoint
- `.container-fluid`, which is width: 100% at all breakpoints
- `.container-{breakpoint}`, which is width: 100% until the specified breakpoint

Click [here](https://getbootstrap.com/docs/4.6/layout/overview/#containers) to see how each container’s max-width compares to the original `.container` and `.container-fluid` across each breakpoint.
It is also useful to look at [Bootstrap Grid Example](https://getbootstrap.com/docs/5.1/examples/grid/#containers) to see them in action.
[React Flexbox Grid](https://roylee0704.github.io/react-flexbox-grid/) can be used to make websites responsive. It is derived from the grid system followed by Bootstrap.

## 3. What are Responsive Breakpoints?
[Breakpoints in Bootstrap](https://getbootstrap.com/docs/4.6/layout/overview/#responsive-breakpoints) are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.
Bootstrap primarily uses the following media query ranges — or breakpoints.
|   Breakpoint  |   Syntax  |   Dimension   |
|---------------|-----------|---------------|
|X-small    |none since this is the default in Bootstrap|<576px|
|Small      |sm     |>=576px    |
|Medium     |md     |>=768px    |
|Large      |lg     |>=992      |
|Extra-large|xl     |>=1200px   |
|Extra Extra Large (only in Bootstrap 5)|xxl|>=1400px|

## 4. Why should you use **rem** instead of **px** for setting margin and padding?
- `rem` is a relative unit while `px` is a fixed unit. `rem` scales better than `px`. If you want a fixed-size component, then you should use `px`.
- Along with `rem`, there is also `em`. Click [here](https://www.geeksforgeeks.org/difference-between-em-and-rem-units-in-css/) to understand the difference between `rem` and `em`.
- `rem` is recommended when setting margin and padding because `em` has [this problem](https://stackoverflow.com/questions/11799236/should-i-use-px-or-rem-value-units-in-my-css#:~:text=Sizes%20specified%20in%20ems%20are%20relative%20to%20the%20parent%20element.%20This%20leads%20to%20the%20em%27s%20%22compounding%20problem%22%20where%20nested%20elements%20get%20progressively%20larger%20or%20smaller.%20For%20example%3A).
- Bootstrap has utility classes for setting margin and padding. They help create [responsive spacing](https://getbootstrap.com/docs/4.0/utilities/spacing/) when we want to modify an element's appearance. So instead of having inline styles such as `margin-top: 8px`, we can add `mt-2` to the class of an element.
    - Having trouble understanding `$spacer` in this [link](https://getbootstrap.com/docs/4.0/utilities/spacing), click [here](https://stackoverflow.com/questions/48971732/unable-to-undertstand-usage-of-spacer-in-bootstrap-4)
    - Convert `px` to `rem` and vice versa, click [here](https://nekocalc.com/px-to-rem-converter)

## 5. How to align elements horizontally/vertically?
You should try one of these approaches until it works for you:
- Using Bootstrap [vertical-alignment](https://getbootstrap.com/docs/4.1/utilities/vertical-align/) utilities such as `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom`, and `.align-text-top`. 
    - [Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
    - **Note**: vertical-align only affects inline, inline-block, inline-table, and table cell elements 
- Using `margin: auto;` to horizontally center a block element (like <div>)
    - **Note**: Center aligning has no effect if the width property is not set (or set to 100%).
- Using `text-align: center;` to center the text inside an element (or `text-align: left;` or `text-align: right;`)
    - More on [CSS Text Alignment](https://www.w3schools.com/css/css_text_align.asp)
    - [Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
- [Vertical align center in Bootstrap](https://stackoverflow.com/questions/42252443/vertical-align-center-in-bootstrap-4/42252877#42252877) with 
    - `align-self-center` ([demo](https://www.codeply.com/go/fFqaDe5Oey))
    - `align-items-center` ([demo](https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_flex-justify&stacked=h))
    - `justify-content-center` ([demo](https://www.codeply.com/go/3gySSEe7nd))
    - `my-auto`([demo](https://www.codeply.com/go/akn5BYxQwn))
    - [more](https://stackoverflow.com/questions/42252443/vertical-align-center-in-bootstrap-4/42252877#42252877)

## 6. How to force elements to stay on the same row?
Using `display: inline-block` by setting `white-space: nowrap` on a parent element, and `display: inline-block` on all child elements. More on [how to prevent inline-block divs from wrapping](https://www.geeksforgeeks.org/how-to-prevent-inline-block-divs-from-wrapping/?ref=lbp).
To understand the difference between `display: inline`, `display: inline-block` and `display: block`, click [here](https://www.w3schools.com/css/css_inline-block.asp#:~:text=Compared%20to%20display%3A%20inline%2C%20the%20major%20difference%20is%20that%20display%3A%20inline%2Dblock%20allows%20to%20set%20a%20width%20and%20height%20on%20the%20element.). For a demo, click [here](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1).

## Useful resources:
- [Bootstrap examples](https://getbootstrap.com/docs/5.2/examples/)
- [React Flexbox Grid](https://roylee0704.github.io/react-flexbox-grid/)
- [CSS Layout - Horizontal & Vertical Align](https://www.w3schools.com/css/css_align.asp)
- [Bootstrap Interview Questions](https://www.interviewbit.com/bootstrap-interview-questions/#bootstrap-questions-for-freshers)
- [Top 45 Bootstrap Interview Questions and Answers in 2022](https://www.edureka.co/blog/interview-questions/bootstrap-interview-questions/)
- [How to Use the Bootstrap Grid the Right Way](http://bootstrap.themes.guide/how-to-use-bootstrap-grid.html)
- [How to force html elements stay on the same line](https://www.designcise.com/web/tutorial/how-to-force-html-elements-to-stay-on-the-same-line)



