import React, { Component } from 'react';


class ProfileComponent extends Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="profile-card-4 z-depth-3">
                                <div className="card">
                                    <div className="card-body text-center bg-primary rounded-top">
                                        <div className="user-box">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADdCAMAAABzPkXkAAAAWlBMVEX///+enp7d3d3u7u7t7e3s7Oz6+vrz8/Py8vL29vb7+/vHxcWampqbm5vg4ODi4uLV1dWysrLNzc2ioqKrq6u7u7u3t7empqbDw8Ozs7PKysrS0tKSkpLGw8P51KavAAAQkElEQVR4nO1d6XqzKhA2rmhArZqYJqf3f5uHRQURBBFN2uebP6VOEucVZphFIAgIZRGmjDZj3IpT0kpJM6IXAbmYc35hw8/1/GDiA9qMJn6h56c2/JTzBVDBP5T/UP5GlDEmdiHBrYShIE32BaDlR5yfcz6TYs5PlPxBSiU/nvMZSs7POD/W8geUGaGUEm/mpJWrLtrxs8P4uT1fAKXpbNwc+242Qqe+mUagFX8aYcOzF/jkponMj+LZCLXjC0Iv1M40pO31cIU/STnokZWeWulhoRf6H0q5832M2MWIE1Aq+d5H7CHWZ5WPOZiX53utyxbrMzyG42eSgR+F/0F46e9NlQEQnTWTGIe0NMIcvQIw8kF3IYQghF2TgL/k+8RlnUSM38DLSAiie/UnUGIpkmeHYDjwAbqIhOAdnIfyEL3EXJA0LYQI1mDg93OUBOeD6Z3q+970kn8g5R8AuJmsoU7m1mKBeuCnD0gGKPqiUidRsgCJCV5qhop8aQWVwFej4vxkDio+0CtIgxdkSggpjByUrQIk4T9Z353tFXhACZJuNDSQ2hjcsUqM5APfvxQleMGp4yAeUumr1YLEn+jTQ1Gq9dLGGq3pZQzEjkPP5guuYCQfadNUijcXemljbTR6SbyggjlHBWkC3AIpbhYpaWbFyAeUn3J+zvnZyC8GfnCbgUJQrZAzmJnwfdPvpyM/53wuNCjmoCjeFe88Gvtum/cugbQi1E8jcIN3DqQRqvbeA+OQHvRsi1cA9HZmheC9+E2+T/Z0AUnG9XfFBD4IpXZEOoxYbF2dQFKc7Qu4jFhDvBn4jidTPk06Eeyq1Hu86XkmiUBtNqem/mz8zySevYKvXR05dOdXAj7Y9wFKb3w7obYCJ6GMN6OMEo037oCzAttRxltRxgaUsQrlPpDoa/ZvFalQxgaUuhwe+4BNPLkWRZNm/rUL5P0mfh17QqZ4UxlPynzfXkHm4NUJ1JbdHPVXGn2e74OnkB0YUVtX/fwSvILPQ5nswIjDyzAse/li5Rvl7uwWuLkrJUKPEqNs5csd8JbdAoTSAlNKm6SFQzdMOW0q+dmCHzs66AjB/hFikEuUFxgGC6EyvVArQm+sBi1nkoFv7EpEAEGI2OdaTH3fd1+3a10SjCqUl04bb85H8En1yyBb60oEUdt93x7P5lXXdThSyWj6d4kSVh/l4QVXLUqEukcTzgEpaWF9aB7XY3ZrvDBZG8kajSh1ufQ40GGE3TWs1tFNKDvF1zN9rn1EqbI2C1A5JhaF4T+4mY7NMV6bXRyKjhI/D9VdCbuXoQNFlArXCTaFUigudKoXmoNi/bF7JlHbHjpBWFOp+pE+n/ru/fVL9XB9bQEZlg9VDSXR6+HZvo9qskRtuAlkGDaKX2EVFv/ZLReUinQW6rdBJKR6Vo8dKIXslnVfRsuoeeQvNcoFpGLCxF7ehGIZb0b2fanObm2qX0bLma7dDlJpZC8I8JnkvfXLZDnUajOoJUq1+fkU36eSUcJmo+FhVKtQhh+CchE/o3vlAlLl42EjC3x5eE5Z50kvI3kKcFFKilIxZGETKd6n3Zx1downxy9hfiChhJtcHpEUQxY2wXjTXBVP2sWbwfAYdPGkoRpER7BU4nLtSqXDzl6skEboW+qX84G2zXud09L9UaJ8i4cnoXTGqLI/6OoRpTaeXItJxnhzjrJz78qwXNR3h77k8aQ2JlmLN4MpXstzqam8qOAXM5R7BqwqXfksnISaNz3UL8EcpYvbw0nWTPQEn1G/BE8RZb+nK5fOLGy8eAUeUIqBF/rehzIMpRHrx/dRo5TizXU/VgwM96lluDBAW/xYQz6WhW48XhQfC70oxZNivBnNYxL42tmVYTmrndGYhN1UiieNQsv8vfVLf8aHwuwE1URMakM8qY83PeZ9BIvh7t6JMDlInit4t+8jOrJ7fIKJuNeObp+DspxQoi8fKPl0wlyfE+uXK3qZc5Q3LygnP2PMVOr0blf9UhlP6vn5lH3bPZEwmmZgmGyMJ9X83fVLOmzu47NHTy8opxwLlNb0vbN+yb0f2PgAyfuy27By8ej6JfcL4P7pUkSJHp5QLkp9o7XRx5OK+iU6BiU2Pqb6pSHeFOqXe0I32gLjPL4nUaBCWaXuQgn8gD+GzfXLqW+TcKqU+EE5RpkojKz77vD6pRD8+kXZl6VeD0/2fXIsF/LnxnKU6F6GmUeU2qlmkY9VoIzDcHyJzjNKPPsmWpTKfKxl/ZK01KFbzvk83iR3qfhLAa0Xp2BCiS12OY6loX7JhcpthN5Vv4zFOokgl1+UNIfEZxKT33ps/ZIKhrhcvlAStcQoP8P3iYlcQ+TrFSWkTnHyGSgTipIpppcgeupL2vaCUpt1ttbLRBDMK0r2Y8kWvVyrXwYsXiTtId7EzWAIzeZ8HrqNfDpdhkwx/aQKBpRDrIpl4UIJ8WTA4km90Jy/vX65HMEpFYwqJrMXnlAOnr9+hKrmy8PqlwNKoph+EiKDt95W6yjP9fAK/vw9JUQoyuGJlR5RamMOm5hkEA35Q0kyIohl6ekmABvql+qYJN9NbMRSxYRPLyBpSWiYeocIcx/JM4lDriAa3q5/IF+pAvLExmFRRY65At8e3vAO0wv5cmPD8grHrMPHvKGWDAJd4NUTyrDsR//iyBzeajwp52MHlOXdTzKW0TD2y2iG0nVlInEQxtCMNIfHgltDPDnnAxV/AGf/Jr490dz6GE/iFkOhFFrgK4U21y+1fu2Q3TqM2P3d6iSe65fpcSg/aWWi25uiFlR9EsrDhmziFaVNPLm2/vIgkFXEvQAnvZzXL6nUgNtQFk9a8Fm8WRwEMx1uynaeY/GiVqg1vmm+tKlfYv4hmhlbruQ/bf/Y4gCQVWDWw5N32Mi8gywlFJ6yW7bxpHpPGAzTcqWlDVVhyfR+b/2SmVAP0RsjHAem3rTTS1TJKeCPwTlXwPvW27xZufbdGfvHelPOxEIP37a7mDeHFhyCck8+NhDmT18o08AyntyUj+VugxCaKX2hdb4v80P7SunLCPGkgS+A8lAnEfiRJ5Q0pSVbkz11El9eAeN7MrKJtR6+Z2dVPyjjD0fpZchWwDdKr3oZx16GbKbd19n1vQL2AaWNjWY2dDWnN/G9xCY8JyfYUGXObo0v2lh2wdd86WUuqaJphPqdLz35PoEXVzax08N37h8b7Y6+Sktrc9LuYsp4c7/9SaIdNa7D6pcS7Q0yPYeWlPzlCiZ+vg9lruu7PbkCz14B4e/qzGqbHr5v7/xdUWZ6Ikrt/Lm2s+rE32GAhFNZVChd87FecuuUn3O++2wixIs5v+nu3PrwGHbWSeZ+bexsgMDKOXx76iTsgj+vgI0wx7rJpr0M335ukOtsUvwylE7Lo18Ho9y3Lnp5vmVeO8Csf4q18zFX4kl9vDmgJICNaw44Hyj5hcQHSejwrtrPz3iKmWnNAdAKrVmTYJovTfGkmp+E9XUryOv1JzGNUNf3fUxD2sH3oSjDZiPMqw3KD/LwGEos9gaM9fVQlNrs1vYzLYSYhaCsf67Wr1i+rnOUhphEH09qslvGcNGCv/hMSr2C5vpjuYC4uTKUWWH3+xtl9Fy/DMa1tSz4emLJLbqzvo70rNmkIffdZ9UvGR8k38N7n0RyU3fWzwnktYd9Zb3TzXt9H1Bf4Liu5GrCKWK8XrsLgk9wXHZLF08u8rHGeJMcc8VXz4wjUY3x9bz+zFGSA69GL8AmnrTMx6rXBgnbNujWBi359KfAN5ytERr66qeRgdavWTdOKC+oTwK+l4RSKPXaIC2/8FwniZIvKK2EErA8X2Rb+bp+vZolwgnlBbUl+OT6JRiOm5mt92omED9KaAuUZLXeWecGuZyOVF3YYtP5qrbaDE9CSTYV+1SUGOTYF9LaPfX4XEFJYB7v4dnEmwu9nEAuVyi+tqLEMOmPejqXVn4MpLVhjTvvWyAcAaVYh2nVneLOqjCcn6iza407u7ASmlEUpniTTFLCOVeq1aa1GeR1dtgVLIF5/7s1r0CYL41DekRh8n3EY9nUa2rNw3Z+pBfC3t5neXhgtr+kbuWwCae0SWW7Pd70X78UsltAOodWuz66btZQfkvnn3erb+fbxJuz+uXO/X0KaUPU1VXgDKhyCr1L21fDe+AulLi/Dw/N3OPJxb7yhp1HS4UTSw4VKr/lTbphI5wQ4BJvDqB8eAXJYgfxzq6GWTMawat2Ig8/Yv/YCIC4W0jntOe66uSgy6Wa3u/xjtI6nsyaW49UZ1FsX4tZLcYre2D9/RmPKPfVL7fvbZjlRR7eWqg7hhY+Nhbey2/daVkI3+RegyLPnPc25Iq7oX5JHlfTaREymF9bjtQpw+Wwl5C2j2owLNv3qTQO6YW1wXpSPVrD6fNEsNb+eKTyZXEOKoKXG1lce4LvA0B4u1ielgzvdt1ZlrYnhCKIvusB2oEoAe5F+zMgUfu00M6q2XKgLQZ6S9xQ2sWTRd1tPfMadrWhO8t682HhCLZNRr2E/fVL3rcsnqzuyOGQS4RWh20Z3lUTkZEgNm4UVaTquwUo03w5egV173p0Obo8tDir58X1DFTSoelY4VcJvdH3wRPO1aUbuUBto1HPfQeiQ3gjJteHh4eN6pd52jDJo9rEyWr6WCeE9R67mEaU2qzz0PnRdoujFKdbgrx6OQ8d9s04YvVZZ0NoFvZ7u3EgJG9hWT48/fIFtq8sXY03A/4Y+EwynqMHXq0vSRYw/YHEBC/XeMzfbvTwiFn1J4h0wqBXkBeC8+nk+8T77J+ChH3kysaLTooE+8qEchFPFg8fNkcWhAed3n+b/Px3tla/XJzNFpQX3x3JaOxK1SGQ+wnBFwuNF2ezKWeS+zEYpz3uVIezeiHYZcqZROEVJLsnay2xPcNUhyP6ugEM7Xwf+aBHr0KQzlyeTeaT4MOMMgo8m3iJ2mO7khD8WoKa62UUHaWSowjYzB6mlQOhPol09UtmdL1PkrIEX+VBBla8SZuvzpfabKE/OmaunBNq05X6pW2SaQfB19EDlhA5O0rn4SnO8PZ//4fqwGTvBG+a+mUenQASO7Ny+e4YgnUuxCQZIRaFHWvgR+qUNR//BAENMik+odR3xnjF1J/zMIcDz+T6ZXHKQMJ+geJQ+kMIJgrf56SuPI/QXYHypIF0IsF0Ub9M/lpX0hOkpPolODROeA+hO5B8H3A7yficST2QfB+wXgr+nQSXKN8t0gEko0z+KMqxfjn6PocHfW8guPB9/iLK/xZewT+Uv5X+W2S3/ipKsX6ZpX/SxqbZvH75R2cS2cP7myhl36eHf4/+A3I+NqzDihB7+Zi02JvI0kXWLJ35pRW/cuaHIv815WOJchYkB5TnAd1qO8+xLaKcbFo4zd5DIPyC8tl7B+zF94LzcXvJJx8Y+arvG/n4A+t89v2MykeFzsaLGFVBrY/pTZgNK/lX9hWhd+X8SMtfWVmxZyW/xbtbDrsySPxBymjaZ8TA50J93srEfyjfjFKtl07rLwW9TDR6lwx6qeWv6eXu9ZexAZWWb2dt9HwB1VZr9PbdxdjObvYjOJr4v2nfrX8o34jSxgsw6GXsXS9jg17aeAli/ZIGYSlv5ryoKV2042eH8XN7vgBq42q2WF7NZsUf+yYaV6OZ+FE8G6F2/PN3FzPo4dlewf9KWFiwU36hhwAAAABJRU5ErkJggg==" alt="user avatar" />
                                        </div>
                                        <h5 className="mb-1 text-white">Jhon Doe</h5>
                                        <h6 className="text-light">UI/UX Engineer</h6>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group shadow-none">
                                            <li className="list-group-item">
                                                <div className="list-icon">
                                                    <i className="fa fa-phone-square"></i>
                                                </div>
                                                <div className="list-details">
                                                    <span>9910XXXXXX</span>
                                                    <small>Mobile Number</small>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="list-icon">
                                                    <i className="fa fa-envelope"></i>
                                                </div>
                                                <div className="list-details">
                                                    <span>info@example.com</span>
                                                    <small>Email Address</small>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="list-icon">
                                                    <i className="fa fa-globe"></i>
                                                </div>
                                                <div className="list-details">
                                                    <span>www.example.com</span>
                                                    <small>Website Address</small>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="row text-center mt-4">
                                            <div className="col p-2">
                                                <h4 className="mb-1 line-height-5">154</h4>
                                                <small className="mb-0 font-weight-bold">Projects</small>
                                            </div>
                                            <div className="col p-2">
                                                <h4 className="mb-1 line-height-5">2.2k</h4>
                                                <small className="mb-0 font-weight-bold">Followers</small>
                                            </div>
                                            <div className="col p-2">
                                                <h4 className="mb-1 line-height-5">9.1k</h4>
                                                <small className="mb-0 font-weight-bold">Views</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <a href="javascript:void()" className="btn-social btn-facebook waves-effect waves-light m-1"><i className="fa fa-facebook"></i></a>
                                        <a href="javascript:void()" className="btn-social btn-google-plus waves-effect waves-light m-1"><i className="fa fa-google-plus"></i></a>
                                        <a href="javascript:void()" className="list-inline-item btn-social btn-behance waves-effect waves-light"><i className="fa fa-behance"></i></a>
                                        <a href="javascript:void()" className="list-inline-item btn-social btn-dribbble waves-effect waves-light"><i className="fa fa-dribbble"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card z-depth-3">
                                <div className="card-body">
                                    <ul className="nav nav-pills nav-pills-primary nav-justified">
                                        <li className="nav-item">
                                            <a href="javascript:void();" data-target="#profile" data-toggle="pill" className="nav-link active show"><i className="icon-user"></i> <span className="hidden-xs">Profile</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void();" data-target="#messages" data-toggle="pill" className="nav-link"><i className="icon-envelope-open"></i> <span className="hidden-xs">Messages</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void();" data-target="#edit" data-toggle="pill" className="nav-link"><i className="icon-note"></i> <span className="hidden-xs">Edit</span></a>
                                        </li>
                                    </ul>
                                    <div className="tab-content p-3">
                                        <div className="tab-pane active show" id="profile">
                                            <h5 className="mb-3">User Profile</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h6>About</h6>
                                                    <p>
                                                        Web Designer, UI/UX Engineer
                            </p>
                                                    <h6>Hobbies</h6>
                                                    <p>
                                                        Indie music, skiing and hiking. I love the great outdoors.
                            </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6>Recent badges</h6>
                                                    <a href="javascript:void();" className="badge badge-dark badge-pill">html5</a>
                                                    <a href="javascript:void();" className="badge badge-dark badge-pill">react</a>
                                                    <a href="javascript:void();" className="badge badge-dark badge-pill">codeply</a>
                                                    <a href="javascript:void();" className="badge badge-dark badge-pill">angularjs</a>
                                                    <a href="javascript:void();" className="badge badge-dark badge-pill">css3</a>
                                                    <a href="javascript:void();" className="badge badge-dark badge-pill">jquery</a>
                                                    <a href="javascript:void();" className="badge badge-dark badge-pill">bootstrap</a>
                                                    <a href="javascript:void();" className="badge badge-dark badge-pill">responsive-design</a>
                                                    <hr />
                                                    <span className="badge badge-primary"><i className="fa fa-user"></i> 900 Followers</span>
                                                    <span className="badge badge-success"><i className="fa fa-cog"></i> 43 Forks</span>
                                                    <span className="badge badge-danger"><i className="fa fa-eye"></i> 245 Views</span>
                                                </div>
                                                <div className="col-md-12">
                                                    <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                                                    <table className="table table-hover table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane" id="messages">
                                            <div className="alert alert-info alert-dismissible" role="alert">
                                                <button type="button" className="close" data-dismiss="alert">×</button>
                                                <div className="alert-icon">
                                                    <i className="icon-info"></i>
                                                </div>
                                                <div className="alert-message">
                                                    <span><strong>Info!</strong> Lorem Ipsum is simply dummy text.</span>
                                                </div>
                                            </div>
                                            <table className="table table-hover table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus.
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.
                                </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane" id="edit">
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" value="Mark" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" value="Jhonsan" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="email" value="mark@example.com" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Change profile</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="file" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Website</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="url" value="" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" value="" placeholder="Street" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                                    <div className="col-lg-6">
                                                        <input className="form-control" type="text" value="" placeholder="City" />
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <input className="form-control" type="text" value="" placeholder="State" />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Username</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" value="jhonsanmark" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Password</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="password" value="11111122333" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="password" value="11111122333" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                                    <div className="col-lg-9">
                                                        <input type="reset" className="btn btn-secondary" value="Cancel" />
                                                        <input type="button" className="btn btn-primary" value="Save Changes" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
export default ProfileComponent;