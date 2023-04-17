import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { Site } from '../consts';

export async function get(context) {
    const posts = await getCollection('blog');
    return rss({
        title: Site.title,
        description: Site.description,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.slug}/`,
            pubDate: post.data.date
        })),
    });
}
