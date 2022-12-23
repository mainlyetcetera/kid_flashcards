import { Request, Response, NextFunction } from 'express'
import { get, post, controller, bodyValidator } from '../decorators'
import { Paths } from '../types/routes/Paths'
import { pool } from '../db/db'

@controller(Paths.placeholder)
class NumbersController {
  @get(Paths.numbers)
  getLogin(_: Request, res: Response): void {

      pool.query("select * from numbers", (e, r) => {
          try {
              // console.log(r);
              res.send(r.rows);
          } catch (err) {
              console.log({ e, err });
          }
      })

  }

  // @post(Paths.login)
  // @bodyValidator('email', 'password')
  // postLogin(req: Request, res: Response): void {
  //   const { email, password } = req.body

    // if (email === AuthD.email && password === AuthD.password) {
    //   req.session = { loggedIn: true }
    //   res.redirect(Paths.root)
    // } else {
    //   res.status(422).send('Please enter correct login information')
    // }
  // }

}
