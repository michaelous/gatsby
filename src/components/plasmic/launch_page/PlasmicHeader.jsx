// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b1KGPsGct1aorWokhuN4v9
// Component: avfy2MiN-zeUr
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import { useScreenVariants as useScreenVariantsuAnW2ZhaPvFnS } from "./PlasmicGlobalVariant__Screen" // plasmic-import: U_AnW2ZhaPVFnS/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_launch_page.module.css" // plasmic-import: b1KGPsGct1aorWokhuN4v9/projectcss
import * as sty from "./PlasmicHeader.module.css" // plasmic-import: avfy2MiN-zeUr/css
import IconIcon from "./icons/PlasmicIcon__Icon" // plasmic-import: El12qygDK9sQAq/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg" // plasmic-import: iPnY9nKq69Qxra/icon
import UsersvgIcon from "./icons/PlasmicIcon__Usersvg" // plasmic-import: 7AOsGe4_JkRS1t/icon
import CartsvgIcon from "./icons/PlasmicIcon__Cartsvg" // plasmic-import: FrfvqfF4M7SYeR/icon
import groupLogosvgDliHcHuwFh2DPv from "./images/groupLogosvg.svg" // plasmic-import: dliHCHuwFH2DPv/picture

export const PlasmicHeader__VariantProps = new Array()

export const PlasmicHeader__ArgProps = new Array()

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsuAnW2ZhaPvFnS(),
  })

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column___9MtFy)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cw4Ru)}
          >
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___5Yxqj
              )}
              component={Link}
              platform={"gatsby"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__pndxO)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__thjbx
                )}
              >
                {"Home"}
              </div>

              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__ixk2U)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>

            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__bkiA
              )}
              component={Link}
              platform={"gatsby"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__uHxGl)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tx01W
                )}
              >
                {"Catalog"}
              </div>

              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__wwFEf)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column__poKf0)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"100%"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"170px"}
            src={{
              src: groupLogosvgDliHcHuwFh2DPv,
              fullWidth: 300,
              fullHeight: 105,
              aspectRatio: 2.864865,
            }}
          />
        </div>

        <div className={classNames(projectcss.all, sty.column__hanJt)}>
          <div className={classNames(projectcss.all, sty.freeBox__j3CM)}>
            {true ? (
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__yDdgT
                )}
                component={Link}
                href={"#"}
                platform={"gatsby"}
              >
                <SearchsvgIcon
                  className={classNames(projectcss.all, sty.svg__io1I)}
                  role={"img"}
                />
              </p.PlasmicLink>
            ) : null}
            {true ? (
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__cmuJm
                )}
                component={Link}
                href={"#"}
                platform={"gatsby"}
              >
                <UsersvgIcon
                  className={classNames(projectcss.all, sty.svg__mbSxt)}
                  role={"img"}
                />
              </p.PlasmicLink>
            ) : null}
            {true ? (
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__o3Rbj
                )}
                component={Link}
                href={"#"}
                platform={"gatsby"}
              >
                <CartsvgIcon
                  className={classNames(projectcss.all, sty.svg__yhX0K)}
                  role={"img"}
                />
              </p.PlasmicLink>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "columns", "img"],
  columns: ["columns", "img"],
  img: ["img"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps,
    })

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader"
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`
  }
  return func
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
)

export default PlasmicHeader
/* prettier-ignore-end */
