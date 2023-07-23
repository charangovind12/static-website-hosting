import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import org.clamav.*;
 
public class ScanServlet extends HttpServlet {
   public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      ClamScan scan = new ClamScan();
      try {
         scan.start();
         Part filePart = request.getPart("file");
         InputStream fileStream = filePart.getInputStream();
         ClamScanResult result = scan.scan(fileStream);
         response.setContentType("text/html");
         PrintWriter out = response.getWriter();
         out.println("<html><head><title>Malware Scan Results</title></head><body>");
         if (result.isInfected()) {
            out.println("<h1>Malware detected!</h1>");
         } else {
            out.println("<h1>File is clean.</h1>");
         }
         out.println("</body></html>");
      } catch (ClamScanException | IOException | ServletException e) {
         e.printStackTrace();
      } finally {
         scan.stop();
      }
   }
}
