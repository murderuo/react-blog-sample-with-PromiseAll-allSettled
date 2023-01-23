function Header({ values }) {
  const photos = values.photos.slice(0, 50);

  return (
    <>
        <div className="container border ">
          <div className="row">
            <div className="col-lg-6 sol-md-12 px-0">
              <div className="d-flex flex-column justify-content-between images">
                <img
                  src={photos[Math.floor(Math.random() * photos.length)]?.url}
                  alt=""
                  className="img-fluid"
                />

                <img
                  src={photos[Math.floor(Math.random() * photos.length)]?.url}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 px-0">
              <div className="d-flex flex-column justify-content-between images">
                <img
                  src={photos[Math.floor(Math.random() * photos.length)]?.url}
                  alt=""
                  className="img-fluid"
                />

                <img
                  src={photos[Math.floor(Math.random() * photos.length)]?.url}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Header;
