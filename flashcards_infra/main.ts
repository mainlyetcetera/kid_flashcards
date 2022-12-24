import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput, RemoteBackend } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";
import { SecurityGroup } from "@cdktf/provider-aws/lib/security-group";
// import { Vpc } from "@cdktf/provider-aws/lib/vpc";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "AWS", {
      region: "us-east-1",
    });

    // const vpc = new Vpc(this, "flashcards_vpc", {
    //     cidrBlock: "172.31.0.0/16"
    // });

    // const ports = [22, 80, 443, 5432];

    const secGroup = new SecurityGroup(this, "flashcards_group", {
      name: "flashcards_group",
      // vpcId: vpc.id,
      egress: [
        {
          fromPort: 0,
          toPort: 0,
          cidrBlocks: ["0.0.0.0/0"],
          protocol: "-1",
        },
      ],
      ingress: [
        {
          fromPort: 0,
          toPort: 0,
          cidrBlocks: ["0.0.0.0/0"],
          protocol: "-1",
        },
      ],
    });

    secGroup.name;

    const ec2Instance = new Instance(this, "compute", {
      ami: "ami-0b0dcb5067f052a63",
      instanceType: "t2.micro",
      tags: {
        Name: "flashcards"
      },
      securityGroups: ["launch-wizard-1"],
      keyName: "personal_default"
    });

    new TerraformOutput(this, "public_ip", {
      value: ec2Instance.publicIp,
    });

  }
}

const app = new App();
const stack = new MyStack(app, "aws_instance");

new RemoteBackend(stack, {
  hostname: "app.terraform.io",
  organization: "mainlyetcetera",
  workspaces: {
    name: "flashcards_infra",
  },
});

app.synth();
