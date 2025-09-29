'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const [email, setEmail] = useState("")

  const isValid = email.trim().length > 0 // validasi sederhana

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background relative">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full bg-white flex items-center justify-center p-4 shadow-xs">
        <Image src={"/main/Icon.svg"} alt="Icon" width={160} height={40}/>
      </div>

      {/* Form Card */}
      <div className="flex flex-row w-full items-center justify-center mt-20 px-4">
        <Card className="w-full max-w-md text-center shadow-xs">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-semibold">Daftar Sekarang</CardTitle>
            <CardDescription>
              Sudah punya akun Tokopedia?{" "}
              <Link href="/sign-in" className="text-primary font-semibold hover:underline">
                Masuk
              </Link>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Google Button */}
            <Button className="w-full !py-6 flex gap-2" variant="outline">
              <FaGoogle className="size-6" />
              <p className="font-semibold text-foreground/70">Google</p>
            </Button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] bg-muted w-full" />
              <span className="text-xs text-foreground/50 whitespace-nowrap">atau</span>
              <div className="h-[1px] bg-muted w-full" />
            </div>

            {/* Input */}
            <div className="flex flex-col gap-1 text-left">
              <Input
                placeholder="Nomor HP atau E-mail"
                value={email}
                className='!py-6'
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-foreground/70">
                Contoh: email@tokopedia.com
              </p>
            </div>

            {/* Submit Button */}
            <Button
              className="w-full py-6 font-semibold"
              disabled={!isValid}
            >
              Daftar
            </Button>

            {/* Terms */}
            <div className="text-center text-xs text-foreground/70 leading-relaxed">
              Dengan mendaftar, saya menyetujui{" "}
              <Link href="/" className="font-semibold text-primary hover:underline">
                Syarat & Ketentuan
              </Link>{" "}
              serta{" "}
              <Link href="/" className="font-semibold text-primary hover:underline">
                Kebijakan Privasi Tokopedia
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignUpPage
