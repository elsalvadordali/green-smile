
function AuthError({errMessage}) {
    function trimErrorMessage(msg) {
        return msg.replace("auth/", "").replace("-", " ");
    }
    return (
        <div>{trimErrorMessage(errMessage)}</div>
    )
}

export default AuthError;