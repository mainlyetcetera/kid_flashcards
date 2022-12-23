import { Request, Response } from 'express'
import { get, controller } from '../decorators'
import { Paths } from '../types/routes/Paths'

@controller(Paths.placeholder)
class RootController {
  @get(Paths.root)
  getRoot(_: Request, res: Response): void {
    res.send('found basic route\n')
  }
}
