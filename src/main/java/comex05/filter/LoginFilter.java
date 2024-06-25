package comex05.filter;

import comex05.entity.User;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;
@WebFilter("/filter/*")
public class LoginFilter extends HttpFilter {
    private final List<String> excludes = List.of("/filter/login");
    @Override
    protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
        //先判断是否需要过滤该路径
        for (String e : excludes) {
            //getServletPath与getContextPath不同
            if (e.equals(req.getServletPath())) {
                chain.doFilter(req, res);
                return;
            }
        }
        //会话处理，如果用户没有登陆，直接打回登陆界面，如果已经登陆，过滤此请求，允许访问welcome
        User user = (User) req.getSession().getAttribute("user");
        if (user != null) {
            chain.doFilter(req, res);
            return;
        }
        res.sendRedirect(req.getContextPath() + "/login");

    }
}
