'use client'

import { useState } from 'react'
import { AppSidebar, Prompt } from '@/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export default function Page() {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)

  return (
    <SidebarProvider>
      <AppSidebar onPromptSelect={setSelectedPrompt} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {selectedPrompt?.name || 'Select a prompt'}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {selectedPrompt ? (
            <div className="flex-1 rounded-xl bg-muted/50 p-4">
              <h2 className="text-lg font-semibold mb-4">
                {selectedPrompt.name}
              </h2>
              <p>Content for {selectedPrompt.name} goes here</p>
            </div>
          ) : (
            <div className="flex-1 rounded-xl bg-muted/50 p-4 flex items-center justify-center">
              <p className="text-muted-foreground">
                Select a prompt from the sidebar
              </p>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
