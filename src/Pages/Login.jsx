
import world from '../assets/world.json'
import Lottie from 'lottie-react'
const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse">
          <div className="text-center lg:text-left w-full">
            <Lottie animationData={world}/>
          </div>
          <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;