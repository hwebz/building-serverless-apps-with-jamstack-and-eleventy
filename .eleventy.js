module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./_site/images');
    eleventyConfig.addPassthroughCopy('./_site/css');
    eleventyConfig.addLayoutAlias('base', 'pageTemplates/base.njk');
    eleventyConfig.addLayoutAlias('page', 'pageTemplates/page.njk');
    eleventyConfig.addLayoutAlias('page-hero', 'pageTemplates/page-hero.njk');

    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: '_site',
            // no need
            data: '_data',
            layouts: '_layouts',
            includes: '_includes',
            output: 'dist'
        }
    }
}