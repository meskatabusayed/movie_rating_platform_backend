import type { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

const validateRequest = (schema: ZodType) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      next();
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        error,
      });
    }
  };
};

export default validateRequest;