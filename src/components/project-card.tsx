"use client";

        import Image from "next/image";
        import {
          Card,
          CardHeader,
          CardBody,
          Typography,
          Button,
        } from "@material-tailwind/react";

        interface ProjectCardProps {
          img: string;
          title: string;
          desc: string;
        }

        export function ProjectCard({ img, title, desc }: ProjectCardProps) {
          return (
            <Card color="transparent" shadow={false} className="h-full flex flex-col">
              <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
                <Image
                  src={img}
                  alt={title}
                  width={768}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-0 flex-1 flex flex-col justify-between">
                <div>
                  <a
                    href="#"
                    className="text-blue-gray-900 transition-colors hover:text-gray-800"
                  >
                    <Typography as="span" variant="h5" className="mb-2 block">
                      {title}
                    </Typography>
                  </a>
                  <Typography className="mb-4 font-normal !text-gray-500">
                    {desc}
                  </Typography>
                </div>
                <Button color="gray" size="sm" className="self-center">
                  see details
                </Button>
              </CardBody>
            </Card>
          );
        }

        export default ProjectCard;