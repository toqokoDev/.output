import { c as defineEventHandler, g as getQuery, q as queryWithLimit, e as createError } from '../../_/nitro.mjs';
import 'mysql2/promise';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';

const news_get = defineEventHandler(async (event) => {
  try {
    const queryParams = getQuery(event);
    let limit = 5;
    if (queryParams.limit) {
      const parsedLimit = parseInt(queryParams.limit, 10);
      if (!isNaN(parsedLimit) && parsedLimit > 0) {
        limit = parsedLimit;
      }
    }
    const sql = `
      SELECT 
        id,
        title,
        content,
        image_url,
        created_at,
        updated_at
      FROM news
      ORDER BY created_at DESC
    `;
    const news = await queryWithLimit(sql, limit);
    return {
      success: true,
      data: news,
      count: Array.isArray(news) ? news.length : 0
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u0438\u0437 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445"
    });
  }
});

export { news_get as default };
//# sourceMappingURL=news.get.mjs.map
