import { Injectable } from '@nestjs/common';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

@Injectable()
export class PdfService {
  async generateUserPdf(userData: any): Promise<Uint8Array> {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 400]);
      const { width, height } = page.getSize();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontSize = 12;

      // Adding some content to the PDF
      page.drawText('User Data', {
        x: 50,
        y: height - 50,
        size: 24,
        font,
        color: rgb(0, 0, 0),
      });

      let yPosition = height - 100;
      userData.forEach((user, index) => {
        page.drawText(`${index + 1}. ${user.name} - ${user.email}`, {
          x: 50,
          y: yPosition,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
        yPosition -= 20;
      });

      const pdfBytes = await pdfDoc.save();
      return pdfBytes;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate PDF');
    }
  }
}
