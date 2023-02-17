import { NextFunction, Request, Response } from 'express'

//NOTE: that is wath comes next!
//NOTE: catch 404s
export const notFoundHndler = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`${req.method} ${req.originalUrl} Not Found`)
    error['status'] = 404
    next(error)
  }
  
  //NOTE: catch all
export const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
      console.log(error);
      res.status(error['status'] || 500)
      res.json({error: error.message})
  }