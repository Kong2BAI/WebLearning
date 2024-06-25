package MyServlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.Logger;

@WebServlet("/hello")
public class MyServlet extends HttpServlet {
    private static final Logger LOGGER =
            Logger.getLogger(MyServlet.class.getName());
    public MyServlet(){
        LOGGER.info("MyServlet()");
    }

    @Override
    public void init() throws ServletException {
        super.init();
        LOGGER.info("init()");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write("hello");
    }
}
