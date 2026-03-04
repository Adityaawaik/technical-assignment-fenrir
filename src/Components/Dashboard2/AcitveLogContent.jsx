import React, { useContext } from "react";
import WebContext from "../../Store/WebContext";

const ActiveLogContent = () => {
  const { mode } = useContext(WebContext);
  return (
    <div
      className={`p-4 rounded-lg ${
        mode
          ? "bg-black text-white shadow-[0px_0px_3px_0px_white] "
          : "bg-white"
      }`}
    >
      <div className="">
        <p>
          <span className="text-gray-400">[09:00:00]</span> I’ll begin a
          systematic penetration test on{" "}
          <span className="text-teal-600">helpdesk.democorp.com</span>. Let me
          start with reconnaissance and enumeration.
        </p>

        <p className="mt-4">
          <span className="text-gray-400">[09:01:00]</span> Good! target is
          online. Now let me perform port scanning to identify running services.
        </p>

        <p className="mt-4">
          <span className="text-gray-400">[09:02:00]</span> Excellent
          reconnaissance results:
        </p>

        <div className="ml-8 mt-2 text-gray-500">
          - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)
        </div>

        <p className="mt-2">
          Let me probe the web server on target first to understand its
          structure.
        </p>

        <p className="mt-4">
          <span className="text-gray-400">[09:03:00]</span> Great! I found a
          login page for a Help Desk Platform. I can see a useful comment:{" "}
          <span className="text-teal-600">
            "TODO: Delete the testing account (test:test)"
          </span>
          . Let me test this credential. The login redirects to{" "}
          <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
            /password/test
          </span>
          . Let me follow that path and explore it.
        </p>

        <p className="mt-4">
          <span className="text-gray-400">[09:04:00]</span> The POST method is
          not allowed on /password/test. Let me check what the JavaScript does –
          it posts to <span className="text-teal-600">'#'</span> which means the
          current page. Let me try a different approach.
        </p>

        <p className="mt-4">
          <span className="text-gray-400">[09:05:00]</span> It redirects back to
          /password/test. Let me check if there's an /api endpoint or look for
          other paths. Let me also try exploring with the{" "}
          <span className="text-teal-600">test:test</span> password directly on
          other endpoints.
        </p>

        <p className="mt-4">
          <span className="text-gray-400">[09:06:00]</span> Great! I can access
          the dashboard using the{" "}
          <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-md">
            'X-UserId: 10032'
          </span>{" "}
          header. The dashboard shows "Welcome, John Doe". This suggests an{" "}
          <span className="text-red-600 font-semibold">IDOR vulnerability</span>{" "}
          – I can access any user's dashboard by just changing the X-UserId
          header. Let me explore more of the application...
        </p>
      </div>
    </div>
  );
};

export default ActiveLogContent;
