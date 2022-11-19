
function AuthError({ errMessage }) {
    function trimErrorMessage(msg) {
        return '⚠' + msg.replace("auth/", "").replace("-", " ");
    }
    console.log("err message", errMessage);
    return (
        <> {trimErrorMessage(errMessage)}</>
    );
}

export default AuthError;