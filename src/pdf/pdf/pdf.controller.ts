import { Body, Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('generate')
  async generatePdf(@Body() userData: CreateUserDto, @Res() res: Response) {
    try {

      const pdfBytes = await this.pdfService.generateUserPdf(userData);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=user-data.pdf');
      res.send(pdfBytes);
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).send('Failed to generate PDF');
    }
  }
}
