import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// await redis.set('foo', 'bar');
// const client = new Redis("rediss://default:AajfAAIjcDFjOTVjMmJkYmFiMjU0ZWM2YjIxNTg4YTBlYmE0M2U4MHAxMA@resolved-jaybird-43231.upstash.io:6379");