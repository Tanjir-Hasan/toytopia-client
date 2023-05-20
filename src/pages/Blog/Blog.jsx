import useTitle from "../../hooks/useTitle";


const Blog = () => {

    useTitle('Blog')

    return (
        <div className="px-44 mx-auto" style={{ backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% )" }}>
            <h1 className="text-7xl font-extrabold text-center py-8 text-[#4a2d4c]">FAQ</h1>

            {/* q1 */}
            <h3 className="text-2xl text-[#660708] font-medium">Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <h4 className="text-2xl font-medium text-[#0f8b8d] underline underline-offset-4">Answer:</h4>
            <p className="ml-3 mt-2 pb-10">
                The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.
                <br /> <br />
                The client includes the access token in each request to the server that hosts the protected resources. The server then verifies the access token to determine if the client is authorized to access the requested resource. If the access token is valid and has not expired, the server fulfills the request. When the access token expires, the client sends the refresh token to a token endpoint (usually provided by the authentication server). The token endpoint verifies the refresh token and, if valid, issues a new access token and optionally a new refresh token. This process allows the client to continue accessing protected resources without requiring the user to re-authenticate.
                <br /> <br />
                The access token needs to be sent with each request to the server that requires authentication. It is typically stored in memory or as a secure HTTP-only cookie. Storing it in memory is suitable for single-page applications (SPAs) where JavaScript handles API requests. For server-side applications, the access token can be stored in a session or a secure session-like storage mechanism. The refresh token should be stored securely and is usually persisted on the client-side, such as in a secure HTTP-only cookie or local storage. The choice depends on the security requirements and the client application's architecture. It's essential to protect the refresh token against cross-site scripting (XSS) attacks and other security vulnerabilities.
            </p>

            {/* q2 */}
            <h3 className="text-2xl text-[#660708] font-medium">Question: Compare SQL and NoSQL databases.</h3>
            <h4 className="text-2xl font-medium text-[#0f8b8d] underline underline-offset-4">Answer:</h4>
            <p className="ml-3 mt-2 pb-10">
                SQL databases:
                <li>SQL are Vertically scalable.</li>
                <li>It is Table-based.</li>
                <li>SQL are Better for multi-row transactions.</li>
                <br />
                NoSQL databases:
                <li>NoSQL are horizontally scalable.</li>
                <li>Based on document, key-value, graph, or wide-column stores</li>
                <li>It is better for unstructured data like documents or JSON.</li>
            </p>

            {/* q3 */}
            <h3 className="text-2xl text-[#660708] font-medium">Question: </h3>
            <h4 className="text-2xl font-medium text-[#0f8b8d] underline underline-offset-4">Answer:</h4>
            <p className="ml-3 mt-2 pb-10">
                Express.js is a web framework for Node.js which is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                <br /> <br />
                NestJS is a back-end framework for Node.js and TypeScript-based, server-side applications. It is building for efficient, scalable, and enterprise-grade backend applications using Node. js.
            </p>

            {/* q4 */}
            <h3 className="text-2xl text-[#660708] font-medium">Question: </h3>
            <h4 className="text-2xl font-medium text-[#0f8b8d] underline underline-offset-4">Answer:</h4>
            <p className="ml-3 mt-2 pb-10">
                One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </p>
        </div>
    );
};

export default Blog;