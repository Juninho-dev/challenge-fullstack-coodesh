import { NextFunction, Request, Response } from "express";
import { createReadStream } from "fs";
import readLine from "readline";

import { getSlices } from "../helpers";
import { apiMessage } from "../helpers/apiMessage";
import { UploadRepository } from "../repositories/UploadRepository";
import { validateUpload } from "../validations/uploadValidator";

export class UploadController {
  async upload(req: Request, res: Response, next: NextFunction) {
    try {
      const { file } = validateUpload.parse(req.files);
      const uploadRepository = new UploadRepository();

      file.mv(`./uploads/${file.name}`);
      const read = createReadStream(`./uploads/${file.name}`);

      readLine
        .createInterface({
          input: read,
          crlfDelay: Infinity,
        })
        .on("line", async (line) => {
          if (line.length) {
            await uploadRepository.saveFileUpload(getSlices(line), req.user_id);
          }
        });

      return res.send(apiMessage(true, 201, "Arquivo enviado com sucesso"));
    } catch (error) {
      return next(error);
    }
  }
}
