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
            // default folder is '_includes'
            includes: '_layouts',
            output: 'dist'
        }
    }
}