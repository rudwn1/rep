/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/kyz7SnyoduM
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { CardContent, Card, CardHeader } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function Component() {
  return (<>
    <div
      className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 bg-gradient-to-r from-blue-500 to-green-500 fixed top-0 z-50">
      <Link className="flex items-center justify-center" href="#">
        <StoreIcon className="h-6 w-6 text-white mr-2" />
        <span className="sr-only">Reptile Manager</span>
      </Link>
      <nav
        className="ml-auto flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
        <Link
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
          href="#">
          Introduction
        </Link>
        <Link
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
          href="#">
          Problem Recognition
        </Link>
        <Link
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
          href="#">
          Feasibility
        </Link>
        <Link
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
          href="#">
          Growth Strategy
        </Link>
        <Link
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
          href="#">
          Teaming
        </Link>
        <Link
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
          href="#">
          Contact
        </Link>
      </nav>
    </div>
    <main className="flex-1">
      <section
        className="w-full py-12 sm:py-24 md:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-green-500 text-white"
        id="Home">
        <div className="container px-4 md:px-6">
          <div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Reptile Manager"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550" />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Reptile Manager
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Wi-Fi-based IoT reptile management system that automatically controls temperature/humidity based on
                  breeding object activity and environmental data and predicts the condition of the object for best
                  management
                </p>
              </div>
              <Button className="bg-white text-black">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <XIcon className="w-8 h-8 mb-4 text-green-500" />
            <h2 className="text-2xl font-bold">Problem recognition</h2>
            <p className="mt-2 text-gray-500">
              An increasing number of reptiles are kept as pets, and they often suffer from diseases due to inadequate
              management.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckIcon className="w-8 h-8 mb-4 text-green-500" />
            <h2 className="text-2xl font-bold">Motivation for development</h2>
            <p className="mt-2 text-gray-500">
              We aim to improve the quality of life for these reptiles by providing a system that automates their
              management.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckIcon className="w-8 h-8 mb-4 text-green-500" />
            <h2 className="text-2xl font-bold">Necessity for development</h2>
            <p className="mt-2 text-gray-500">
              With our system, we hope to reduce the number of reptiles that suffer from diseases due to lack of
              management.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8" id="teaming">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 flex-grow mt-8">
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <span
              className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
              <Avatar src="/placeholder.svg?height=96&width=96" />
            </span>
            <h3 className="font-bold text-xl mb-2">Gyeongju Kim</h3>
            <p className="text-gray-500">Hanyang University ERICA</p>
            <p className="text-gray-500">Department of ICT Convergence</p>
            <p className="text-gray-500">(Major in Media Technology)</p>
            <p className="text-gray-500">kjkim0905@hanyang.ac.kr</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <span
              className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
              <Avatar src="/placeholder.svg?height=96&width=96" />
            </span>
            <h3 className="font-bold text-xl mb-2">Bokyung Kim</h3>
            <p className="text-gray-500">Hanyang University ERICA</p>
            <p className="text-gray-500">Department of Materials and Chemical Engineering</p>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-light-blue-200 dark:bg-blue-900"
        id="Problem Recognition">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Problem Recognition</h2>
          <div className="grid gap-4 py-8 lg:grid-cols-1 lg:gap-8">
            <h3 className="text-2xl font-bold mb-2">Motivation and necessity for development</h3>
            <Card>
              <CardContent>
                <p>d t a i l h e r e</p>
                <img
                  alt="Reptile Management"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height="600"
                  src="/placeholder.svg"
                  width="600" />
              </CardContent>
            </Card>
            <h3 className="text-2xl font-bold mb-2">Product differentiation</h3>
            <Card>
              <CardContent>
                <p>d t a i l h e r e</p>
              </CardContent>
            </Card>
            <h3 className="text-2xl font-bold mb-2">Possibilities for future development</h3>
            <Card>
              <CardContent>
                <p className="flex">
                  <span>d t a i l h e r e</span>
                  <img
                    alt="Vivarium"
                    className="ml-4"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100" />
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="feasibility">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Feasibility</h2>
          <div className="grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <h3>Device Development Plan</h3>
              </CardHeader>
              <CardContent>
                <p>
                  Connect the temperature and humidity sensor module (DHT11 module) and the infrared PIR motion sensor
                  to Arduino WeMos D1 with a long cable. Considering that the heat source (spot lamp) is divided and
                  commercialized by use in the market while the water supply system is not popularized, the heat
                  source is designed to be receptive and the water supply is designed in an integrated manner. By
                  connecting the power cord (wire cord) to the relay module at the middle and the outlet at the end,
                  the heat source product can be controlled without any voltage problems. The water supply system is
                  designed to submerge in the water tank (a water bottle or a self-made water bottle plan) by
                  connecting a hose to the Arduino water pump motor. Also, connect the LCD display module and the
                  button for setup and verification, and finally install it in the case.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3>Software Development Plan</h3>
              </CardHeader>
              <CardContent>
                <p>d t a i l h e r e</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3>Application Development Plan</h3>
              </CardHeader>
              <CardContent>
                <p>
                  Using the ESP8266 Wi-Fi module on the Arduino WeMos D1, R1 Wi-Fi board or Arduino Uno, you can post
                  data entered through sensors in the form of web pages based on Wi-Fi. We plan to read the web pages
                  with the Webhook program and develop web applications and Android/iOS apps in turn using IFTTT.
                </p>
                <img
                  alt="Application Development Plan"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 mt-4"
                  height="200"
                  src="/placeholder.svg"
                  width="200" />
                <figcaption className="text-center mt-2">Application Development Plan</figcaption>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <h3>Component Pricing</h3>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Arduino WeMos D1</TableCell>
                      <TableCell>₩5000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Temperature and Humidity Sensor Module (DHT11 module)</TableCell>
                      <TableCell>₩2000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Infrared PIR Motion Sensor</TableCell>
                      <TableCell>₩1000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Power Cord (Wire Cord)</TableCell>
                      <TableCell>₩1200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Relay Module</TableCell>
                      <TableCell>₩1500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1-Outlet Outlet</TableCell>
                      <TableCell>₩1000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Water Pump Motor</TableCell>
                      <TableCell>₩1100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>LCD Display Module</TableCell>
                      <TableCell>₩1000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Button/Hose/Cable</TableCell>
                      <TableCell>₩1000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total</TableCell>
                      <TableCell>₩13900</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3>Project Schedule</h3>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Find customers and establish H/W system design</TableCell>
                      <TableCell>01/15/2024</TableCell>
                      <TableCell>01/31/2024</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Excluding web apps HW/SW prototype 1st production</TableCell>
                      <TableCell>02/01/2024</TableCell>
                      <TableCell>02/15/2024</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Development of early version of web app</TableCell>
                      <TableCell>02/16/2024</TableCell>
                      <TableCell>03/01/2024</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        After joining the start-up club: Producing a prototype case (3D printer), modifying and
                        designing web apps UI/UX
                      </TableCell>
                      <TableCell>03/02/2024</TableCell>
                      <TableCell>TBD</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Subsequent plans will be established, including outsourcing of sales cases, and developing
                        Andriod/iOS apps
                      </TableCell>
                      <TableCell>TBD</TableCell>
                      <TableCell>TBD</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        id="growth-strategy">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Growth Strategy</h2>
          <div className="grid gap-6 py-12 lg:grid-cols-1 lg:gap-12">
            <h3 className="text-2xl font-bold mb-2">Reptile Market Outlook</h3>
            <Card className="lg:col-span-1">
              <CardContent>
                <p>d t a i l h e r e</p>
              </CardContent>
            </Card>
            <h3 className="text-2xl font-bold mb-2">Current Korean Status of Reptile Breeding</h3>
            <Card className="lg:col-span-1">
              <CardContent>
                <p>d t a i l h e r e</p>
              </CardContent>
            </Card>
            <h3 className="text-2xl font-bold mb-2">Performance Generation Strategy</h3>
            <Card className="lg:col-span-1">
              <CardContent>
                <p>d t a i l h e r e</p>
              </CardContent>
            </Card>
            <h3 className="text-2xl font-bold mb-2">Funding Requirements and Procurement Plan</h3>
            <Card className="lg:col-span-1">
              <CardContent>
                <p>
                  {`
                                                                                                                                                                                                                                  d
                                                                                                                                                                                                                                  t
                                                                                                                                                                                                                                  a
                                                                                                                                                                                                                                  i
                                                                                                                                                                                                                                  l
                                                                                                                                                                                                                                  h
                                                                                                                                                                                                                                  e
                                                                                                                                                                                                                                  r
                                                                                                                                                                                                                                  e
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                `}
                </p>
                <Button className="text-lg text-blue-500" variant="link">
                  <a href="#">Learn More about HYU ERICA start-up club</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
          <form className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <input className="border rounded-md p-2" placeholder="Name" type="text" />
            <input className="border rounded-md p-2" placeholder="Email" type="email" />
            <textarea className="border rounded-md p-2" placeholder="Message" rows="4" />
            <Button className="bg-blue-500 text-white" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </main>
    <div
      className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <p className="text-xs">© Reptile Manager. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </div>
  </>);
}


function StoreIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path
        d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}


function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>)
  );
}
