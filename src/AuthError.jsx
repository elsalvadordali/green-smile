
function AuthError({ errMessage }) {
    function trimErrorMessage(msg) {
        return msg.replace("auth/", "").replace("-", " ");
    }
    return (
        <> {trimErrorMessage(errMessage)}</>
    )
}

export default AuthError;