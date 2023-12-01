const Hero = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-orange-50 to-orange-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">
                                    Cari Nama Domainmu
                                </span>
                            </label>
                            <div className="flex flex-row flex-nowrap">
                                <input
                                    type="text"
                                    placeholder="Cari domain anda..."
                                    className="input input-bordered bg-white text-black"
                                    required
                                />
                                <select className="select select-bordered w-full max-w-xs bg-white text-slate-700">
                                    <option selected>.id</option>
                                    <option>.com</option>
                                    <option>.ac.id</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-orange-500 bg-white hover:bg-orange-400 hover:text-white">
                                Cek
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center">
                    <h1 className="text-6xl font-black text-black font-mono">
                        Cloud Hosting Indonesia untuk
                        <span className="text-orange-600"> Kesuksesan </span>
                        Websitemu!
                    </h1>
                    <p className="py-6 font-semibold text-black font-mono">
                        Qwords menawarkan layanan Cloud Hosting Akses Cepat,
                        Standar Keamanan Tinggi, Uptime Server 99,99%, Fitur
                        Lengkap dan Dukungan Pelanggan 24 jam untuk memenuhi
                        kebutuhan website Anda. Tersertifikasi ISO 27001 dengan
                        Data Center Tier 3 dan Network Tier 1
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Hero;
