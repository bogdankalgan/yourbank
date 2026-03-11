import {Component} from "react"
import {NavLink} from "react-router-dom";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false, error: null}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error}
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo)
    }

    handleReset = () => {
        this.setState({hasError: false, error: null})
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-grey-10 gap-6 p-8 text-center">
                    <h2 className="text-4xl"><span>Something</span> went wrong</h2>
                    <p className="text-grey-70 text-lg">{this.state.error?.message}</p>
                    <div className="flex gap-4">
                        <button
                            onClick={this.handleReset}
                            className="bg-green-60 text-grey-15 rounded-full px-6 py-3 text-lg transition duration-300 hover:bg-grey-15 hover:text-white cursor-pointer"
                        >
                            Try Again
                        </button>
                        <NavLink
                            to={"/"}
                            className="bg-grey-15 border border-grey-20 text-white rounded-full px-6 py-3 text-lg transition duration-300 hover:text-green-60"
                        >
                            Go Home
                        </NavLink>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}
