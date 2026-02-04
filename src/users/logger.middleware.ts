import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: (error?: any) => void) {
        const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl} `;
        console.log(`[${req.method}] ${fullUrl}`);
        next();
    }
}
