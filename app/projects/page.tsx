/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DnfC3RMvla9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Projects() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                    <Link href="#" className="block" prefetch={false}>
                        <img
                            src="/placeholder.svg"
                            alt="Project 1"
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                    </Link>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                                Project 1
                            </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            A brief description of Project 1 goes here. It should be concise and informative.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GlobeIcon className="w-4 h-4" />
                                Live Site
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GithubIcon className="w-4 h-4" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                    <Link href="#" className="block" prefetch={false}>
                        <img
                            src="/placeholder.svg"
                            alt="Project 2"
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                    </Link>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                                Project 2
                            </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            A brief description of Project 2 goes here. It should be concise and informative.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GlobeIcon className="w-4 h-4" />
                                Live Site
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GithubIcon className="w-4 h-4" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                    <Link href="#" className="block" prefetch={false}>
                        <img
                            src="/placeholder.svg"
                            alt="Project 3"
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                    </Link>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                                Project 3
                            </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            A brief description of Project 3 goes here. It should be concise and informative.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GlobeIcon className="w-4 h-4" />
                                Live Site
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GithubIcon className="w-4 h-4" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                    <Link href="#" className="block" prefetch={false}>
                        <img
                            src="/placeholder.svg"
                            alt="Project 4"
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                    </Link>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                                Project 4
                            </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            A brief description of Project 4 goes here. It should be concise and informative.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GlobeIcon className="w-4 h-4" />
                                Live Site
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GithubIcon className="w-4 h-4" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                    <Link href="#" className="block" prefetch={false}>
                        <img
                            src="/placeholder.svg"
                            alt="Project 5"
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                    </Link>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                                Project 5
                            </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            A brief description of Project 5 goes here. It should be concise and informative.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GlobeIcon className="w-4 h-4" />
                                Live Site
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GithubIcon className="w-4 h-4" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                    <Link href="#" className="block" prefetch={false}>
                        <img
                            src="/placeholder.svg"
                            alt="Project 6"
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                    </Link>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                                Project 6
                            </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            A brief description of Project 6 goes here. It should be concise and informative.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GlobeIcon className="w-4 h-4" />
                                Live Site
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors"
                                prefetch={false}
                            >
                                <GithubIcon className="w-4 h-4" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function GithubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function GlobeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}
